'use client'

import About from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import Project from '@/components/project';
import { useEffect, useMemo } from 'react';
import { Events, scrollSpy } from 'react-scroll';
import './../css/main.css'
import './../css/mediaQueries.css';
import { Provider, useDispatch } from 'react-redux';
import { store } from '@/redux/store';
import { fetchAboutMe, fetchExprience, fetchHeading, fetchProject } from '@/redux/slice/data';

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    //fetch data
    dispatch(fetchHeading())
    dispatch(fetchAboutMe())
    dispatch(fetchExprience())

    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();
    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  useMemo(() => {
    dispatch(fetchProject())

  }, [])
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Header />
        <About />
        <Experience />
        <Project />
        <Contact />
        <Footer />
      </Provider>
    </>
  )
}
