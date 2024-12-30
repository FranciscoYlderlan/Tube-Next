import { CommentsResponse } from '@/interfaces/comment';

export const mockCommentsData: CommentsResponse = {
  comments: [
    {
      id: 1,
      body: 'Isso é um pensamento incrível!',
      postId: 242,
      likes: 3,
      user: { id: 105, username: 'emmac', fullName: 'Emma Wilson' },
    },
    {
      id: 2,
      body: 'Que habilidades matemáticas incríveis você está mostrando!',
      postId: 46,
      likes: 4,
      user: { id: 183, username: 'cameronp', fullName: 'Cameron Perez' },
    },
    {
      id: 3,
      body: 'Você é uma escritora incrível!',
      postId: 235,
      likes: 2,
      user: { id: 1, username: 'emilys', fullName: 'Emily Johnson' },
    },
    {
      id: 4,
      body: 'Uau! Você melhorou tanto!',
      postId: 31,
      likes: 1,
      user: { id: 89, username: 'braydenf', fullName: 'Brayden Fleming' },
    },
    {
      id: 5,
      body: 'Boa ideia!',
      postId: 212,
      likes: 1,
      user: { id: 149, username: 'wyattp', fullName: 'Wyatt Perry' },
    },
    {
      id: 6,
      body: 'Você está mostrando um entendimento excelente!',
      postId: 184,
      likes: 5,
      user: { id: 110, username: 'danielt', fullName: 'Daniel Taylor' },
    },
    {
      id: 7,
      body: 'Isso está claro, conciso e completo!',
      postId: 172,
      likes: 1,
      user: { id: 4, username: 'jamesd', fullName: 'James Davis' },
    },
    {
      id: 8,
      body: 'Que argumento poderoso!',
      postId: 233,
      likes: 0,
      user: { id: 145, username: 'lukec', fullName: 'Luke Cooper' },
    },
    {
      id: 9,
      body: 'Eu sabia que você conseguiria!',
      postId: 207,
      likes: 3,
      user: { id: 207, username: 'jaces', fullName: 'Jace Smith' },
    },
    {
      id: 10,
      body: 'Ideias maravilhosas!',
      postId: 87,
      likes: 0,
      user: { id: 86, username: 'noram', fullName: 'Nora Mills' },
    },
  ],
  total: 340,
  skip: 0,
  limit: 30,
};
