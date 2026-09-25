"use client";

import { ExerciseContext } from '@/context/ExerciseContext';
import React, { useContext } from 'react';

const ListedWorkouts = () => {
    const {addToPlans, saveForLater } = useContext(ExerciseContext)
    console.log(addToPlans, saveForLater, "addToPlans", "Wishlist")
    return (
        <div>
            listed wrokout | Total added Exercise: {addToPlans.length} <br /> | total saved For Later: {saveForLater.length}
        </div>
    );
};

export default ListedWorkouts;