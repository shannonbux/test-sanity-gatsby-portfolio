export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cf6ea78e28c4e017beb8795',
                  title: 'Sanity Studio',
                  name: 'test-sanity-gatsby-portfolio-studio',
                  apiId: 'a7557236-93ba-4b26-8156-6bfcdd8acdf1'
                },
                {
                  buildHookId: '5cf6ea79742f14018ae3a115',
                  title: 'Portfolio Website',
                  name: 'test-sanity-gatsby-portfolio',
                  apiId: 'ac77a1f2-30c6-4234-8dc2-21c2ddc17959'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shannonbux/test-sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://test-sanity-gatsby-portfolio.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
