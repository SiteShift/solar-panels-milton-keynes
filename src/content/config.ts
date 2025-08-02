import { defineCollection, z } from 'astro:content';

// Guides collection (blog posts, resource guides)
const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.object({
      name: z.string(),
      title: z.string(),
      bio: z.string(),
      image: z.string(),
      linkedIn: z.string().optional(),
      email: z.string().optional(),
    }).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    seo: z.object({
      canonical: z.string().optional(),
      ogImage: z.string().optional(),
    }).optional(),
    readingTime: z.number().optional(),
  }),
});

// Case studies collection
const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    location: z.string(),
    systemSize: z.string(), // e.g., "4kW"
    panelCount: z.number(),
    inverterBrand: z.string(),
    installationDate: z.date(),
    customer: z.object({
      name: z.string(),
      location: z.string(),
      propertyType: z.string(),
      roofType: z.string(),
    }),
    results: z.object({
      monthlyGeneration: z.number(), // kWh
      annualSavings: z.number(), // £
      co2Reduction: z.number(), // kg per year
      paybackPeriod: z.number(), // years
    }),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })),
    review: z.object({
      rating: z.number().min(1).max(5),
      text: z.string(),
      date: z.date(),
    }),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// Suburb pages collection (programmatic SEO)
const suburbsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    location: z.object({
      name: z.string(),
      postcode: z.string(),
      area: z.string(), // e.g., "Milton Keynes"
      coordinates: z.object({
        lat: z.number(),
        lng: z.number(),
      }),
    }),
    solarData: z.object({
      averageIrradiance: z.number(), // kWh/m²/year
      optimalTilt: z.number(), // degrees
      optimalOrientation: z.string(), // e.g., "South"
      estimatedGeneration: z.number(), // kWh/year for 4kW system
    }),
    demographics: z.object({
      averageHousePrice: z.number().optional(),
      propertyTypes: z.array(z.string()).optional(),
      population: z.number().optional(),
    }),
    localInstallers: z.array(z.object({
      name: z.string(),
      distance: z.number(), // miles
      rating: z.number(),
      reviewCount: z.number(),
    })).optional(),
    recentInstallations: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

// Export collections
export const collections = {
  guides: guidesCollection,
  'case-studies': caseStudiesCollection,
  suburbs: suburbsCollection,
};