import { Box, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Link, List, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material'
import React from 'react'
import theme from '../theme'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import { blue, grey, lightBlue, yellow } from '@mui/material/colors';
import CircleIcon from '@mui/icons-material/Circle';
import SchoolIcon from '@mui/icons-material/School';
import { Language, LocationOn, Mail, Person, Phone } from '@mui/icons-material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const skills = [
    { name: 'PHP', icon: '/images/plang/php.png' },
    { name: 'Laravel', icon: '/images/plang/laravel.png' },
    { name: 'Golang', icon: '/images/plang/golang.png' },
    { name: 'Node JS (Express)', icon: '/images/plang/node.jpg' },
    { name: 'VUE / Nuxt JS', icon: '/images/plang/vue.png' },
    { name: 'React / Next JS', icon: '/images/plang/react.png' },
    { name: 'CSS', icon: '/images/plang/css.png' },
    { name: 'JQuery', icon: '/images/plang/jquery.png' },
    { name: 'MySQL, PostgreSQL', icon: '/images/plang/db.png' },
    { name: 'AWS, CPanel', icon: '/images/plang/server.png' },
]

const steps = [
    {
        company: 'Apex IT Web Development Co.,Ltd',
        position: 'Web Developer',
        description: [
            'Building websites and maintainance using PHP, Laravel & Bootstrap .',
            'Designing database structures for web application',
            'Requirement collection and analysis, design & timeline for projects'
        ],
        date: 'Sep 2017 ~ Oct 2018'
    },
    {
        company: 'Career-Tech Japan Co.,Ltd',
        position: 'Full Stack Developer',
        description: [
            // 'Build company in-house E-learning and job agency projects using Laravel, CakePHP, Bootstrap, Vue (Framework - Nuxt js)',
            // 'Develop and maintain Government Assets Management Project using Codeigniter and Bootstrap',
            'Build company in-house E-learning and job portal',
            'Frontend : use Vue (Nuxt) and React  (Next) JS',
            'Backend : use Laravel, CakePHP'

        ],
        projects: [
            { link: 'www.career-techjapan.com [Trainee appointment and recruiting]' },
            { link: 'www.japanreadyschool.com [online course / examination / jobs]' },
            { link: 'https://jpromyanmar.com [Job agency]' },
        ],
        date: 'Dec 2018 ~ Jun 2022'
    },
    {
        company: 'MYSOL Co.,ltd',
        position: 'Senior Web Developer',
        description: [
            'Build web application from Japan using PHP (Zend Framework/ Laravel)',
            'Testing and make documentation for project'
        ],
        date: 'Jul 2022 ~ Feb 2023'
    },
    {
        company: 'Freelancer (self-employed)',
        position: 'Freelance Full Stack Developer',
        description: [
            // 'Develop and maintain for E-Learning Japanese language project',
            // 'Create API, Customize ERP project using Codeigniter, document management/ company profile / blogs news, etc., using Laravel, Vue JS, bootstrap and Flutter'
            'Develop and maintain for E-Learning Japanese language project',
            'Customize ERP project ,document management ,company profiles.',
            'Backend: Use Laravel  , Codeigniter, Node JS',
            'Frontend: Use  React, Vue, Bootstrap'
        ],
        date: 'Mar 2023 ~ Feb 2024'
    },
    {
        company: 'Flct company',
        position: 'Full Stack Developer',
        description: [
            'Build appication web view for social media app and blockchain',
            'Use Vue JS and Golang'
        ],
        date: 'Mar 2024 ~ Present'
    },
    {

    }

]

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Travel Blogpost',
        author: 'Laravel, Next JS, Docker, WebSocket'
    },

    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Myanmar E-Book',
        author: 'Next JS, Node JS API'
    },
];

export const Home = () => {
    return (
        <>
            <Box>
                <Box sx={{ bgcolor: theme.palette.background.default, py: 1, px: {xs: 1, md:10 } }}>
                    <Grid container spacing={2} sx={{ alignItems: 'end' }}>
                        <Grid item md={6} sm={7} sx={{mb: {sm: 5, xs: 0}}}>
                            <Box sx={{ pl: { sm: 6, md: 17 }, textAlign: { xs: 'center', sm: 'left' } }}>
                                <Typography variant='subtitle1'>
                                    Hello guys, I am
                                </Typography>
                                <Typography variant='h1' sx={{ mt: 2 }}>
                                    EI THANDAR KHAING
                                </Typography>
                                <Typography variant='h2' sx={{ mt: 2, color: theme.palette.secondary.main }}>
                                    FULL STACK DEVELOPER
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'start' } }}>
                                    <Typography variant='subtitle1' sx={{ mt: 2 }} className='typewriter'>
                                        Happy codding of my life...
                                    </Typography>
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Typography variant='body1' sx={{ fontSize: 13, color: grey[400] }}>
                                        <Phone sx={{ fontSize: 17, color: theme.palette.secondary.main }} /> +855882090114
                                        <Mail sx={{ fontSize: 17, ml: 3, color: theme.palette.secondary.main }} /> luckychappie000111@gmail.com

                                    </Typography>
                                    <Typography variant='body1' sx={{ fontSize: 13, color: grey[400] }}>
                                        <Person sx={{ fontSize: 17, color: theme.palette.secondary.main }} /> Native - Myanmar
                                        <LocationOn sx={{ fontSize: 17, ml: 2, color: theme.palette.secondary.main }} /> Phnom Penh City, Cambodia

                                    </Typography>
                                </Box>


                            </Box>
                        </Grid>
                        <Grid item md={6} sm={5} xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box sx={{ alignItems: 'center', textAlign: 'center', width: { xs: 200, sm: 300, md: 360 } }}>
                                    <img src='images/myphoto.png' alt='Developer' width='100%' />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{ mt: 0.5, bgcolor: theme.palette.background.main, px: { md: 0, sm: 3 }, py: 3 }}>

                <Box sx={{ p: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', mt: { xs: -7, md: -7, sm: -7 } }}>
                    <Box style={{ boxShadow: 'rgb(207 172 65) 1px 4px 7px' }} sx={{ border: `1px solid ${yellow[700]}`, width: { md: '70%', xs: '100%' }, height: 50, bgcolor: theme.palette.secondary.main, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', px: { md: 13, xs: 5 }, borderRadius: 8 }}>

                        <Link target="_blank" underline="none" sx={{ px: { xs: 3, sm: 0 }, fontSize: 16, fontWeight: 600, display: { xs: 'flex' }, alignItems: 'center' }} href='https://www.linkedin.com/in/ei-thandar-khaing-9401282a8'>
                            <LinkedInIcon sx={{ mr: 1, color: blue[900], fontSize: 30 }} />
                            <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>Linked In</Typography>
                        </Link>


                        <Link target="_blank" underline="none" sx={{ px: { xs: 3, sm: 0 }, ml: { sm: 5, xs: 1 }, fontSize: 16, fontWeight: 600, display: 'flex', alignItems: 'center' }} href='https://github.com/luckychappie'>
                            <GitHubIcon sx={{ mr: 1, color: 'black', fontSize: 30 }} />
                            <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>Github</Typography>
                        </Link>
                        <Link target="_blank" underline="none" sx={{ px: { xs: 3, sm: 0 }, ml: { sm: 5, xs: 1 }, fontSize: 16, fontWeight: 600, display: 'flex', alignItems: 'center' }} href='https://t.me/lucyei7'>
                            <TelegramIcon sx={{ mr: 1, color: lightBlue[700], fontSize: 30 }} />
                            <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>Telegram</Typography>
                        </Link>
                    </Box>
                </Box>
                <Box sx={{ mt: 5,  px: { xs: 2, sm: 3, md: 15 } }} className="about">
                    <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                        <Grid item md={4} sm={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box sx={{ mb: -3.5, display: { xs: 'none', sm: 'block', md: 'block' }, }} >
                                <img src='/images/developer.png' alt='Developer' style={{ width: 200 }} width='100%' />
                            </Box>
                        </Grid>
                        <Grid item md={7} sm={8} sx={{ textAlign: 'center' }}>
                            <Typography variant='h4' sx={{ color: theme.palette.secondary.main }}>
                                About Me
                            </Typography>
                            <Typography variant='body1' sx={{ mt: 3, lineHeight: 1.7 }}>
                                I have around 6 years of experience in the web development, web design,
                                collecting user requirements, structuring project flow and communication with
                                customers. I have been working in both front end and backend including
                                database structures. Mostly work as full-stack developers. I can learn faster for
                                the project's requirements and needs.
                                While I enjoy working in a team and I can also work independently. I also
                                prefer to learn new languages, technologies and I am flexible in
                                communication.

                            </Typography>
                        </Grid>


                    </Grid>

                </Box>

            </Box>
            <Box sx={{ bgcolor: theme.palette.background.default, px: { md: 20, sm: 1, xs: 1 }, py: 3 }}>
                <Grid item sm={12} md={12} >

                    <Typography variant='h4' sx={{ fontSize: 18, mt: 2 }}>
                        My Skills
                    </Typography>
                    <List dense sx={{ mt: 2, pl: { sm: 5, md: 0 } }}>
                        <Grid container spacing={0} sx={{ alignItems: 'center', textAlign: 'center' }}>

                            {skills.map((skill, key) => (
                                <Grid key={key} item sm={2} xs={4} sx={{ textAlign: 'center' }}>
                                    <img style={{ paddingRight: 15 }} width={75} src={`${skill.icon}`} alt={skill.name} />
                                    <Typography sx={{ fontSize: 11, mt: 1, mb: 4 }}>{skill.name}</Typography>
                                </Grid>
                            ))}

                        </Grid>
                    </List>
                    <Typography variant='h4' sx={{ mt: 3, fontSize: 18 }}>
                        Languages
                    </Typography>
                    <List dense sx={{mb: 2, mt: 1, pl: { sm: 2, md: 0 } }}>
                        <Grid container spacing={1} sx={{ alignItems: 'center' }}>

                            <Grid item xs={12} sm={4}>
                                <Language sx={{ ml: 2, color: theme.palette.secondary.main, fontSize: 17 }} /> English (Fluent)
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Language sx={{ ml: 2, color: theme.palette.secondary.main, fontSize: 17 }} /> Japanese (N4 have no JLPT
                                Certificate)
                            </Grid>

                        </Grid>
                    </List>


                </Grid>
            </Box>
            <Box sx={{ bgcolor: theme.palette.background.main, px: { md: 20, sm: 1, xs: 1 }, py: 3 }}>
                <Typography variant='h5' sx={{ mb: 3, mt: 2, textAlign: 'center', color: theme.palette.secondary.main }}>
                    Education
                </Typography>
                <Grid container spacing={2} sx={{ textAlign: 'center', alignItems: 'center' }}>
                    <Grid item sm={3} xs={12} sx={{ textAlign: 'center' }} >
                        <SchoolIcon sx={{ fontSize: 90, color: theme.palette.secondary.main }} />
                    </Grid>
                    <Grid item sm={5} sx={{ textAlign: 'center' }}>
                        <Typography variant='subtitle1' sx={{ fontSize: 17, fontWeight: 550 }}>
                            B.C.Sc (Bachelor Degree of Computer Science)
                        </Typography>
                        <Typography variant='body1' sx={{ mt: 1, fontSize: 14, fontWeight: 550 }}>
                            Computer University (Myanmar)
                        </Typography>
                    </Grid>
                    <Grid item sm={4} xs={12} sx={{ textAlign: 'center' }} >
                        <Typography >
                            Jun 2012 ~ Sep 2017
                        </Typography>
                    </Grid>
                </Grid>

            </Box>
            <Box sx={{ bgcolor: theme.palette.background.default, px: { md: 8 }, pl: { xs: 7 }, py: 3 }}>
                <Typography variant='h5' sx={{ mb: 3, mt: 2, textAlign: 'center', color: theme.palette.secondary.main }}>
                    Working Experiences
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                    <Box sx={{ maxWidth: { md: 800, xs: '100%' }, mt: 3 }}>
                        <Stepper orientation="vertical" nonLinear activeStep={-1}>
                            {steps.map((step, index) => (
                                <Step key={index} expanded>
                                    <StepLabel
                                        StepIconComponent={() =>
                                            <Box sx={{ ml: -5 }}>
                                                <Typography variant='subtitle2' sx={{ fontSize: 13, fontWeight: 550, color: theme.palette.secondary.main }}>
                                                    {step.date}
                                                </Typography>
                                            </Box>
                                        }
                                        sx={{ color: 'white' }}>
                                    </StepLabel>
                                    <StepContent>
                                        <Typography variant='subtitle1' sx={{ color: '#d1ceac', fontWeight: 600, fontSize: 14 }}>{step.company}</Typography>
                                        <Typography variant='subtitle1' sx={{ color: 'white' }}>{step.position}</Typography>
                                        <Box sx={{ color: '#cbc9c6', fontSize: 13, mt: 1 }}>
                                            {
                                                step?.description?.map((desc, index) => (
                                                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mt: 1 }} > <CircleIcon sx={{ mr: 1, fontSize: 6 }} /> {desc} </Box>
                                                ))
                                            }
                                        </Box>
                                        {
                                            step.projects && (
                                                <>
                                                    <Typography variant='subtitle2' sx={{ color: 'white', fontSize: 13, mt: 1, ml: 2 }}>Current Working Projects: </Typography>
                                                    {
                                                        step.projects.map((project, key) => (
                                                            <Typography key={key} sx={{ color: '#4f62e3', fontSize: 13, mt: 1, ml: 2 }}> {project.link} </Typography>
                                                        ))
                                                    }
                                                </>
                                            )
                                        }


                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ bgcolor: theme.palette.background.main, px: { md: 20, sm: 2 }, py: 3 }}>
                <Typography variant='h5' sx={{ mb: 3, mt: 2, textAlign: 'center', color: theme.palette.secondary.main }}>
                    My Demo Projects (Launch  on server)
                </Typography>
                <Grid container spacing={0} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} sm={12} md={6}>
                    <ImageList>

                        {itemData.map((item) => (
                            <ImageListItem key={item.img} sx={{ mx: 1 }} >
                                <img
                                    srcSet={`${item.img}?w=280&fit=crop&auto=format`}
                                    src={`${item.img}?w=280&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={item.author}
                                    actionIcon={
                                        <IconButton
                                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                            aria-label={`info about ${item.title}`}
                                        >
                                            <OpenInNewIcon />
                                        </IconButton>
                                    }
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}
