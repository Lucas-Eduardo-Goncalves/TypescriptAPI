import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
  const createdCouserService = CreateCourseService.execute({
    name: "Node com Typescript",
    duration: 2000,
    educator: "Daniele Evangelista"
  });

  const createdCouserService2 = CreateCourseService.execute({
    name: "ReactJS",
    educator: "Daniele Evangelista"
  });

  return response.json([createdCouserService, createdCouserService2]);
};