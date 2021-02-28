import {Request, Response} from "express";
import { getCustomRepository } from "typeorm";
import {SurveysUsersRepository} from "../repositories/SurveysUsersRepository";


//https://ethereal.email/1?u=ebd717fb-5e7d-4143-ba31-7e170897c70e
//http://localhost:3000/answers/1?u=e4d7e503-d9f4-45fe-b12b-00201ea7a841


class AnswerController{
    async execute(request: Request, response: Response){
        const {value} = request.params;
        const {u} = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u)
        });

        if(!surveyUser){
            return response.status(400).json({
                error: "Survey User does not exists!"
            });
        }
        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);
        
        return response.json(surveyUser);
    }
}
export {AnswerController}