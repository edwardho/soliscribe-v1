export const PLANS = [
    {
      name: 'Free',
      slug: 'free',
      quota: 10,
      pagesPerPdf: 10,
      maxFileSize: 4, // MB
      audioModel: 'Basic Web API',
      price: {
        amount: 0,
        priceIds: {
          test: '',
          production: '',
        },
      },
    },
    {
      name: 'Pro',
      slug: 'pro', 
      quota: 50,
      pagesPerPdf: 25,
      maxFileSize: 32, // MB
      audioModel: 'OpenAI Whisper',
      price: {
        amount: 15,
        priceIds: {
          test: 'price_1QF1fXDhaIOW93c013PVmsXp',
          production: '',
        },
      },
    },
    {
        name: 'Pro Yearly',
        slug: 'pro-yearly',
        quota: 50,
        pagesPerPdf: 25,
        maxFileSize: 32, // MB
        audioModel: 'OpenAI Whisper',
        price: {
          amount: 132,
          priceIds: {
            test: 'price_1QF1fXDhaIOW93c08szJAblW',
            production: '',
          },
        },
    },
    {
        name: 'Elite',
        slug: 'elite',
        quota: Infinity,
        pagesPerPdf: Infinity,
        maxFileSize: 32, // MB
        audioModel: 'OpenAI Whisper',
        price: {
          amount: 25,
          priceIds: {
            test: 'price_1QF23oDhaIOW93c0V6bZzUbW',
            production: '',
          },
        },
    },
    {
        name: 'Elite Yearly',
        slug: 'elite-yearly',
        quota: Infinity,
        pagesPerPdf: Infinity,
        maxFileSize: 32, // MB
        audioModel: 'OpenAI Whisper',
        price: {
          amount: 216,
          priceIds: {
            test: 'price_1QF23oDhaIOW93c06LTQ8BjD',
            production: '',
          },
        },
    }
]