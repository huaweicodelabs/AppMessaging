/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License")
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

		https://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/
export interface BaseProperties {
    id: string,
    startTime: number,
    endTime: number,
    frequencyType: number,
    frequencyValue: number,
    testFlag: number,
    triggerEvents: string[]
}

export interface CardMessageProps {
    base: BaseProperties,
    card: CardProps
}

export interface CardProps {
    title: string,
    titleColor: string,
    titleColorOpenness: number,
    body: string,
    bodyColor: string,
    bodyColorOpenness: number,
    backgroundColor: string,
    backgroundColorOpenness: number,
    portraitPictureURL: string,
    landscapePictureURL: string,
    majorButton: ButtonProps,
    minorButton: ButtonProps
}

export interface ButtonProps {
    text: string,
    textColor: string,
    textColorOpenness: number,
    actionURL: string
}

export interface BannerMessageProps {
    base: BaseProperties,
    banner: BannerProps
}

export interface BannerProps {
    title: string,
    titleColor: string,
    titleColorOpenness: number,
    body: string,
    bodyColor: string,
    bodyColorOpenness: number,
    backgroundColor: string,
    backgroundColorOpenness: number,
    pictureURL: string,
    actionURL: string
}

export interface PictureMessageProps {
    base: BaseProperties,
    picture: PictureProps
}

export interface PictureProps {
    pictureURL: string,
    actionURL: string
}

