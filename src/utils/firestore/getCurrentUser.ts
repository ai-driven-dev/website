import { getTokens } from 'next-firebase-auth-edge';
import { cookies, headers } from 'next/headers';
import { options } from '@/middleware';
import { getUserById } from '@/src/features/userManagement/api/fetchUsers';
import UserEntity from '@/src/features/userManagement/types/UserEntity';

export async function getCurrentUser(): Promise<UserEntity> {
  const tokens = await getTokens(cookies(), {
    ...options,
    headers: headers(),
  });

  if (!tokens) {
    throw new Error('User is not authenticated');
  }

  const userId = tokens.decodedToken.uid;

  if (!userId) {
    throw new Error('User ID is required');
  }

  const user = await getUserById(userId);

  if (!user) {
    throw new Error('User not found');
  }

  return user;
}