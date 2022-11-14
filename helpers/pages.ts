
export const pages = [
  {
    name: 'Accueil',
    path: '/',
    description: 'Faire de sa santé un mode de vie',
    keywords: 'naturopathie, naturopathy, mindefullness, bien être, alimentation, force vitale',
    isAdmin: false,
  },
  {
    name: 'Présentation',
    path: '/Naturopathy',
    description: 'Pour améliorer votre qualité de vie, votre santé, vos performances physiques, pour des questions de gestion du poids, du stress, du sommeil, acné, problèmes articulaires, cardio-vasculaires, digestifs, la liste est longue !',
    keywords: 'naturopathie, qualité de vie, bien être, alimentation, gestion du poids, performances physiques',
    isAdmin: false,
  },
  {
    name: 'Tarifs',
    path: '/Pricing',
    description: 'Consultez nos tarifs et choisissez votre formule adaptée à vos besoins',
    keywords: 'naturopathie, naturopathy, mindefullness, bien être, alimentation, gestion du poids',
    isAdmin: false,
  },
  {
    name: 'Blog',
    path: '/Blog',
    description: 'Liste des articles',
    keywords: 'naturopathie, naturopathy, blog, bien être, alimentation, force vitale',
    isAdmin: false,
  },
  {
    name: 'A propos',
    path: '/About',
    description: 'Naturopathe formée à ISUPNAT certifiée FENA, Masseuse bien-être',
    keywords: 'naturopathie, naturopathy, ISUPNAT certifiée, FENA, Masseuse, bien-être',
    isAdmin: false,
  },
  {
    name: 'Contact',
    path: '/Contact',
    description: 'Pour prendre rendez vous n\'hésitez pas à nous contacter',
    keywords: 'naturopathie, naturopathy, mindefullness, bien être, alimentation, gestion du poids',
    isAdmin: false,
  },
  {
    name: 'CMS Articles',
    path: '/Admin/articles',
    description: 'Administration de gestion des articles',
    // keywords: 'naturopathie, naturopathy, mindefullness, bien être, alimentation, gestion du poids',
    isAdmin: true,
  },
  {
    name: 'Créer Article',
    path: '/Admin/articles/create',
    description: 'Créer un article',
    // keywords: 'naturopathie, naturopathy, mindefullness, bien être, alimentation, gestion du poids',
    isAdmin: true,
  },
]

export const getRoute = (path: string) => computed(() => {
  const page = pages.find(p => p.path === path)
  return page
})
