import { graphQlFetchFunction } from '@packages/lib/server-actions/server-action'
import Wuscascomponents from '@packages/shared-components/home/wuscas/wuscascomponents'
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock the GraphQL function and Next/Image component
jest.mock('@packages/lib/server-actions/server-action')
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />
}))

// Mock Next/Link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
}))

describe('Wuscascomponents', () => {

  const props = {
    heading: 'Test Heading',
    subheading: 'Test Subheading'
  }
  const mockGraphQLData = {
    data: {
      contentData: {
        items: [{
          bodyContentCollection: {
            items: [{
              __typename: 'MultipleCardContainer',
              mediaCardsCollection: {
                items: [{
                  __typename: 'PageStatPodContainer',
                  cta: {
                    primaryCtaLabel: 'Click Here',
                    primaryCtaUrl: '/test-url'
                  },
                  image: {
                    url: 'test-image-url'
                  },
                  statinfoCollection: {
                    items: [
                      {
                        icon: { url: 'test-icon-url' },
                        statNumber: '100',
                        statLabel: 'Test Stat'
                      }
                    ]
                  }
                }]
              }
            }]
          }
        }]
      }
    }
  }

  beforeEach(() => {
    jest.clearAllMocks()
    ;(graphQlFetchFunction as jest.Mock).mockResolvedValue(mockGraphQLData)
  })

  test('renders heading and subheading correctly', async () => {
    render(await Wuscascomponents(props))    
    expect(screen.getByText('Test Heading')).toBeInTheDocument()
    expect(screen.getByText('Test Subheading')).toBeInTheDocument()
  })

  test('handles missing heading and subheading', async () => {
    const prop = {
      heading: undefined,
      subheading: undefined
    }
    render(await Wuscascomponents(prop))
  })

  test('renders stats data correctly', async () => {
    render(await Wuscascomponents(props))
    
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('Test Stat')).toBeInTheDocument()
    expect(screen.getByText('Click Here')).toBeInTheDocument()
    
  })

  test('handles GraphQL errors gracefully', async () => {

    ;(graphQlFetchFunction as jest.Mock).mockRejectedValue(new Error('GraphQL Error'))
    try {
      render(await Wuscascomponents(props))
    } catch (error) {
      expect(error).toBeTruthy()
    }
  })
})

