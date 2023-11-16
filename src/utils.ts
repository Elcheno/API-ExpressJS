import { NewDiaryEntry } from './types'
import { Weather, Visibility } from './enums'

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) throw new Error('Incorrect or missing comment')
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) throw new Error('Incorrect or missing date')
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) throw new Error('Incorrect or missing Weather')
  return weatherFromRequest
}

const parseVisibility = (VisibilityFromRequest: any): Visibility => {
  if (!isString(VisibilityFromRequest) || !isVisibility(VisibilityFromRequest)) throw new Error('Incorrect or missing Visibility')
  return VisibilityFromRequest
}

const isString = (param: string): boolean => typeof param === 'string'

const isDate = (param: string): boolean => Boolean(Date.parse(param))

const isWeather = (param: any): boolean => Object.values(Weather).includes(param)

const isVisibility = (param: any): boolean => Object.values(Visibility).includes(param)

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}

export default toNewDiaryEntry
