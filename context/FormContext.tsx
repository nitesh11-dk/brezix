"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';

interface FormContextType {
    isFormOpen: boolean;
    openForm: () => void;
    closeForm: () => void;
    toggleForm: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useForm = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useForm must be used within a FormProvider');
    }
    return context;
};

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = useCallback(() => {
        setIsFormOpen(true);
    }, []);

    const closeForm = useCallback(() => {
        setIsFormOpen(false);
    }, []);

    const toggleForm = useCallback(() => {
        setIsFormOpen(prev => !prev);
    }, []);

    return (
        <FormContext.Provider value={{ isFormOpen, openForm, closeForm, toggleForm }}>
            {children}
        </FormContext.Provider>
    );
}; 