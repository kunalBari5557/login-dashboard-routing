import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const steps = ['Success', 'Success', 'Failed'];
const stepsCount = [{ name: "Success", step: "step1" }, { name: "Success", step: "step2" }, { name: "Failed", step: "step3" }]

export default function HorizontalNonLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [success, setSuccess] = React.useState(true);
    const [completed, setCompleted] = React.useState<{
        [k: number]: boolean;
    }>({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleClick = () => {
        setSuccess(!success);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <Box sx={{ width: '100%', mt: '5rem' }}>
            <Stepper nonLinear activeStep={activeStep}>
                {stepsCount.map((label, index) => (
                    <Step key={index} >
                        <Box
                            sx={{
                                width: 150,
                                height: 100,
                                mt: 6,
                                borderRadius: "10px",
                                color: "white",
                                backgroundColor: label.name === 'Success' ? 'green' : 'red'
                                // backgroundColor: '#008000',
                                // '&:hover': {
                                //     backgroundColor: 'red',
                                //     opacity: [0.9, 0.8, 0.7],
                                // },
                            }}
                            color="inherit" onClick={handleClick}>
                            <h2 style={{ marginLeft: '-0rem', marginTop: "3rem", }}>{label.name}</h2>
                            {label.name === 'Failed' ?
                                (<Button variant="contained" size="small" sx={{ ml: '1rem', mt: '-2rem' }}>restart</Button>) : null
                            }
                        </Box><br></br>
                        {label.name === 'Success' ?
                            (<Button size="large"
                                sx={{
                                    ml: "-0rem",
                                    borderRadius: "10px",
                                    color: 'white',
                                    backgroundColor: 'black',
                                    '&:hover': {
                                        backgroundColor: 'green',
                                        opacity: [0.9, 0.8, 0.7],
                                    },
                                }}
                                color="inherit" onClick={handleClick}>
                                {label.step}
                            </Button>) : (
                                <Button size="large"
                                    sx={{
                                        ml: "-0rem",
                                        borderRadius: "10px",
                                        color: 'white',
                                        backgroundColor: 'black',
                                        '&:hover': {
                                            backgroundColor: 'red',
                                            opacity: [0.9, 0.8, 0.7],
                                        },
                                    }}
                                    color="inherit" onClick={handleClick}>
                                    {label.step}
                                </Button>
                            )
                        }
                    </Step>

                ))}
            </Stepper>
        </Box>
    );
}