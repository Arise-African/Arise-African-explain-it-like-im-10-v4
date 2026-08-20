import { z } from 'zod';
export const LessonSchema=z.object({title:z.string().min(3).max(100),simpleExplanation:z.string().min(30).max(1800),analogy:z.string().min(15).max(800),keyWords:z.array(z.string()).min(3).max(8),quiz:z.array(z.object({question:z.string().min(8),choices:z.array(z.string()).length(4),answer:z.number().int().min(0).max(3),explanation:z.string().optional()})).min(3).max(6)});
export type Lesson=z.infer<typeof LessonSchema>;
