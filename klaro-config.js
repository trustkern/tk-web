var klaroConfig = {
    privacyPolicy: '/privacy.html',
    default: false,
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,
    lang: 'en',

    translations: {
        en: {
            consentModal: {
                title: 'Cookie & privacy settings',
                description: 'We use cookies and third-party services to improve your experience. You can choose which services you allow below. You can change your preferences at any time via "Cookie Settings" in the footer.',
            },
            consentNotice: {
                description: 'We use cookies and third-party services on this website. Some are essential, others help us improve your experience. {purposes}',
                learnMore: 'Manage settings',
            },
            purposes: {
                essential: {
                    title: 'Essential',
                    description: 'Required for the website to function properly.',
                },
                fonts: {
                    title: 'Fonts',
                    description: 'External fonts for consistent typography.',
                },
                analytics: {
                    title: 'Analytics',
                    description: 'Help us understand how visitors use our site.',
                },
            },
            'google-fonts': {
                description: 'Web fonts served by Google for consistent typography across devices.',
            },
        },
    },

    services: [
        {
            name: 'google-fonts',
            title: 'Google Fonts',
            purposes: ['fonts'],
            required: false,
            default: true,
            cookies: [],
            description: 'Loads web fonts from Google servers.',
        },
    ],
};
