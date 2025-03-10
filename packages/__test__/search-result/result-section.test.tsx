import { render, screen, fireEvent } from '@testing-library/react';
import SrPageResultPod from "@packages/shared-components/sr-page/result-pod/result-section"
import '@testing-library/jest-dom';
import { useRouter } from "next/navigation";

  jest.mock('next/navigation', () => ({
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
      pathname: '/'
    }),
    usePathname: () => '/',
  useSearchParams: () => new URLSearchParams()
  }));

describe('SrPageResultPod Component', () => {
  const mockSearchResultsData = [{
    collegeId: '123',
    collegeTextKey: 'test-university',
    collegeDisplayName: 'Test University',
    collegeMedia: {
      ipCollegeLogo: '/test-logo.png',
      ipCollegeImage: '/test-image.jpg'
    },
    sponsoredListingFlag: 'Y',
    courseCount: 3,
    reviewCount: 50,
    exactRating: 4.5,
    adminVenue: 'London',
    distanceInMiles: '5',
    wuscaRanking: '10',
    review1Text: 'Great university experience',
    bestMatchCoursesList: [{
      courseId: '456',
      courseTitleTextKey: 'test-course',
      courseTitle: 'Test Course',
      minUcasPoints: '120',
      maxUcasPoints: '150',
      availabilityDetails: {
        duration: '3 years',
        studyMode: 'Full Time'
      },
      moduleInfo: 'Course Modules',
      moduleDesc: 'Module 1###Module 2###Module 3',
      enquiryDetails: {
        prospectusFlag: 'Y',
        websiteFlag: 'Y',
        emailFlag: 'Y'
      }
    }]
  }];

  beforeEach(() => {
    // Mock environment variables
    process.env.PROJECT = 'Whatuni';
    process.env.NEXT_PUBLIC_IMAGE_DOMAIN = 'https://test.com';
    global.open = jest.fn();
  });

  test('renders university information correctly', () => {
    render(<SrPageResultPod searchResultsData={mockSearchResultsData} />);
    
    expect(screen.getByText('Test University')).toBeInTheDocument();
    expect(screen.getByText('3 engineering courses')).toBeInTheDocument();
    expect(screen.getByText('sponsored')).toBeInTheDocument();
  });

  test('handles university pod click', () => {
    const { container } = render(<SrPageResultPod searchResultsData={mockSearchResultsData} />);
    
    const universityPod = container.querySelector('.bg-gradient11');
    fireEvent.click(universityPod);
    expect(global.open).toHaveBeenCalled();
    // Add assertion for navigation - depends on your implementation
  });

  test('displays review information when available', () => {
    render(<SrPageResultPod searchResultsData={mockSearchResultsData} />);
    
    expect(screen.getByText('4.5')).toBeInTheDocument();
    expect(screen.getByText('50 reviews')).toBeInTheDocument();
    expect(screen.getByText('Great university experience')).toBeInTheDocument();
  });

  test('renders course information correctly', () => {
    render(<SrPageResultPod searchResultsData={mockSearchResultsData} />);
    
    expect(screen.getByText('Test Course')).toBeInTheDocument();
    expect(screen.getByText('120-150 ucas points')).toBeInTheDocument();
    expect(screen.getByText('3 years Full Time')).toBeInTheDocument();
  });

  test('displays correct location and distance information', () => {
    render(<SrPageResultPod searchResultsData={mockSearchResultsData} />);
    
    expect(screen.getByText('London')).toBeInTheDocument();
    expect(screen.getByText('5 Miles from you')).toBeInTheDocument();
  });


});
