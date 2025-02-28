'use client'

import Modulesaccordioncomponents from '@packages/shared-components/course-details/modules/ModulesAccordionComponent'
import Link from 'next/link';
import React, { useState } from "react";
import { CourseSection } from '../models/course.model';
import { DATA_SOURCE_PAGE_PATH } from '@packages/constants/whatuni.const';

interface Module { subModules: any[], moduleName: string };

interface ModulesComponentProps extends CourseSection {
    modules: Module[]
};

const ModulesComponent = ({ sectionId, sectionName, modules }: ModulesComponentProps) => {
    return (
        <div id={sectionId} className='modules-container'>
            <div className="max-w-container mx-auto">
                <div className='modules-card-container flex flex-col lg:flex-row justify-between gap-[20px] px-[16px] md:px-[20px] xl:px-[0] py-[40px]'>
                    <div className='h5 w-full md:w-[289px]'>{sectionName}</div>
                    <div className='flex flex-col gap-[28px] w-full lg:w-[calc(100%_-_309px)]'>
                        <Modulesaccordioncomponents />
                        <div className='flex items-center gap-[4px] *:text-x-small *:font-normal'>
                            <div className='text-grey300'>DATA SOURCE:</div>
                            <a href={DATA_SOURCE_PAGE_PATH} className='text-primary-400 uppercase hover:text-primary-500 hover:underline'>HESA</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModulesComponent;