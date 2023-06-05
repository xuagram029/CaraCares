import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('About', () => {
  test('renders the About component without error', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    // No assertion is needed, the test will fail if an error is thrown during rendering
  });

  test('displays the About section correctly', () => {
    render(<About />);
    expect(screen.getByText('About CARA')).toBeInTheDocument();
    expect(screen.getByText('CARA was formed in the year 2000 by a dedicated group of animal lovers determined to help the plight of animals in the Philippines.')).toBeInTheDocument();
    expect(screen.getByText('Vision')).toBeInTheDocument();
    expect(screen.getByText('To make the Philippines a compassionate country where all cats and dogs have good homes.')).toBeInTheDocument();
    expect(screen.getByText('Mission')).toBeInTheDocument();
    expect(screen.getByText('To promote animal welfare in the country through education, public awareness, affordable sterilization and veterinary care, and the rehabilitation and rehoming of cats and dogs in need')).toBeInTheDocument();
  });

  test('displays the Goals section correctly', () => {
    render(<About />);
    expect(screen.getByText('Goals')).toBeInTheDocument();
    expect(screen.getByText('To provide veterinary consultations for low-income pet owners through the CARA veterinary clinic')).toBeInTheDocument();
    expect(screen.getByText('To promote Trap/Neuter/Return in barangays, villages, and commercial establishments')).toBeInTheDocument();
    expect(screen.getByText('To provide caring and responsible homes through our adoption program')).toBeInTheDocument();
    expect(screen.getByText('To educate citizens about animal welfare and the stray animal population')).toBeInTheDocument();
    expect(screen.getByText('To promote no-kill pounds and shelters')).toBeInTheDocument();
  });

  test('displays the Note section correctly', () => {
    render(<About />);
    expect(screen.getByText('Please note:')).toBeInTheDocument();
    expect(screen.getByText('CARA does not run an animal shelter. We rely on the compassion of our friends and volunteers to foster our rescues. Exceptional cases are housed at the clinic awaiting adoption.')).toBeInTheDocument();
    expect(screen.getByText('We are not a government agency. The advocacy is run by a few VOLUNTEERS and rely on DONATIONS to keep going.')).toBeInTheDocument();
    expect(screen.getByText('We focus on educating the public about animal welfare, providing low-cost spay/neuter, conducting TNR, and promoting adoption over shopping for pets.')).toBeInTheDocument();
    expect(screen.getByText('As we are volunteers with limited funds, our ability to accommodate requests depends on our availability and resources and YOUR WILLINGNESS to participate.')).toBeInTheDocument();
    expect(screen.getByText('We receive dozens of rescue requests every week. Recently, these requests have become DEMANDS accompanied by insults and recriminations. As much as we want to help, we simply cannot help everyone and all animals in need.')).toBeInTheDocument();
    expect(screen.getByText('Again, we remind everyone that CARA is run by volunteers. Please be respectful and considerate.')).toBeInTheDocument();
    expect(screen.getByText('We encourage you to also take a proactive role in protecting animal rights in the country. In this, we shall always be willing to help guide you.')).toBeInTheDocument();
  });

  test('displays the Learn More buttons correctly', () => {
    render(<About />);
    expect(screen.getByText('Learn more about what we do in our FAQs.')).toBeInTheDocument();
    expect(screen.getByText('Learn more about becoming a CARA volunteer.')).toBeInTheDocument();
  });

  test('displays the New Clinic section correctly', () => {
    render(<About />);
    expect(screen.getByAltText('CARA-Clinic-outer-facade')).toBeInTheDocument();
    expect(screen.getByText('Thanks to a very generous benefactor, CARA opened its doors to their new premises in January 2015.')).toBeInTheDocument();
    expect(screen.getByText('CARA’s goal is to make spay & neuter, as well as basic services, affordable to everyone from all walks in life.')).toBeInTheDocument();
    expect(screen.getByText('In making the spay & neuter procedures within people’s budgets, it will help towards curbing the overpopulation, while preventing endless cruelty to unwanted offspring. It also stops the anti-social behavior that is associated with an unfixed animal. Our long-term goal is to eventually offer mobile spay & neuter services to enable us to reach residents who are unable to afford the transport costs to travel to the clinic.')).toBeInTheDocument();
    expect(screen.getByText('If you would like more information on the benefits of spaying and neutering, please read "Why Spay & Neuter? Your furry friend will thank you."')).toBeInTheDocument();
    expect(screen.getByText('The work we do at the CARA clinic would not be possible without the dedication of our staff and vets who generously offer their time and services to help CARA achieve its mission: making spay/neuter the most effective and humane way to control the population of street animals. With their help, we are also able to make spay/neuter available and affordable to lower-income communities. We currently offer pet boarding and pet grooming services in our clinic.')).toBeInTheDocument();
  });
});
