import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from 'next-auth/providers/github'
import prisma from "@/prisma/client";
import bcrypt from 'bcrypt';

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: 'enter your email' },
                password: { label: 'Password', type: 'password', placeholder: 'enter your password' }
            },
            async authorize(credentials, req) {
                if(!credentials?.email || !credentials?.password) return null;

                const user = await prisma.user.findUnique({ where: { email: credentials.email } });

                if(!user) return null;

                const passwordsMatch = await bcrypt.compare(credentials.password, user.hashedPassword!)

                return passwordsMatch ? user: null;
            }
        })
    ],
    session: {
        strategy: 'jwt'
    }
};