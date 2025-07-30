import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'DevHub - Find & Connect with Developers',
  description: 'Discover and connect with talented developers from around the world. Share knowledge, collaborate, and grow together.',
  keywords: ['developers', 'programming', 'tech', 'collaboration', 'portfolio'],
};

export default function Home() {
  return <HomeClient />;
}