import { Express } from 'express';
import { injectable } from 'inversify';

@injectable()
export abstract class LolNewsController {
    public abstract registerRoutes(app: Express): void;
}