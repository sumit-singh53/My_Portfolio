import Head from 'next/head'

const SEO = ({
  title = "Sumit Singh - Full Stack Developer Portfolio",
  description = "Full Stack Developer specializing in Fintech, Data Analytics, and Machine Learning solutions. View my projects and get in touch.",
  image = "/meta-image.png",
  url = "",
  type = "website"
}) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sumit-singh53.github.io/My_Portfolio"
  const fullUrl = `${siteUrl}${url}`
  const fullImageUrl = `${siteUrl}${image}`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/pixel-avatar.png" />
      <link rel="apple-touch-icon" href="/pixel-avatar.png" />
      <link rel="shortcut icon" href="/pixel-avatar.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Sumit Singh Portfolio" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Sumit Singh" />
      <meta name="keywords" content="Full Stack Developer, React, Next.js, Python, Django, Machine Learning, Fintech, Data Analytics, Portfolio" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      
      {/* Theme color for mobile browsers */}
      <meta name="theme-color" content="#39ff14" />
      <meta name="msapplication-TileColor" content="#121212" />
    </Head>
  )
}

export default SEO