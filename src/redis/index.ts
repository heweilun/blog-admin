import Redis from 'ioredis';
import { env } from '../config';

export const REDIS_DB = new Redis(env.REDIS_CONFIG);