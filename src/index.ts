import { Ability } from '@casl/ability';

interface Article {
  id: number;
  title: string;
  content: string;
  authorId: number;
}

interface User {
  id: number;
  name: string;
}

interface Comment {
  id: number;
  content: string;
  authorId: number;
}

type Action = 'create' | 'read' | 'update' | 'delete';
type Subject = Article | Comment | User | 'Article' | 'User' | 'Comment';

const ability = new Ability<[Action, Subject]>();
console.log(ability);
