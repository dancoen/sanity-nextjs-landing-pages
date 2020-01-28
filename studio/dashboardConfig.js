export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e30a19fbd2243ad96e0d153',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-s1aimins',
                  apiId: 'b7a4e20a-c775-42cb-8aa9-46ec32076cb9'
                },
                {
                  buildHookId: '5e30a1a064aa85d62579d858',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-n2twrpqu',
                  apiId: '252cfaa0-1e44-4dbc-a6a5-de77b678202e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dancoen/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-n2twrpqu.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
