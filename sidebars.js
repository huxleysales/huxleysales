/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    buses: [
        'buses/Introduction',
        {
            type: 'category',
            label: 'Rules',
            link: {
              type: 'generated-index',
            },
            collapsed: false,
            items: [
              'buses/rules/hux-chassis'
            ],
        },
        {
            type: 'category',
            label: 'Speccing Help',
            link: {
              type: 'generated-index',
            },
            collapsed: false,
            items: [
              'buses/speccing/functions',
              'buses/speccing/text',
              'buses/speccing/lights'
            ],
        },
        'buses/community-pictures',
        'buses/importing-buses'
    ],
    spawner: [
        'spawner/Introduction',
        'spawner/setup',
        'spawner/config',
        {
            type: 'category',
            label: 'Category Types',
            link: {
              type: 'generated-index',
            },
            collapsed: false,
            items: [
              'spawner/category-types/open',
              'spawner/category-types/rank',
              'spawner/category-types/gamepass',
              'spawner/category-types/premium',
              'spawner/category-types/clothing'
            ],
        },
        'spawner/advanced-spawning',
        'spawner/bus-teleport',
        'spawner/webhook',
        'spawner/typings'
    ]
}

module.exports = sidebars;