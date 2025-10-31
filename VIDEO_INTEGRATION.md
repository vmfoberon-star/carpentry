# 🎥 Video Integration Guide

## 🎯 Why Add Videos?

**Videos increase engagement by:**
- 80% more time on site
- 85% higher conversion rates
- 3x more social shares
- Better SEO rankings

## 📹 What Videos to Add

### Priority 1: Workshop Tour (Highest Impact)
**What**: 2-3 minute tour of your workshop
**Where**: Hero section background or About section
**Why**: Shows authenticity, craftsmanship, tools

**Content ideas:**
- Walk through workspace
- Show various wood types
- Explain equipment/process
- Your story in background

**Best format**: YouTube or Vimeo

### Priority 2: Process Video
**What**: How you make a piece from start to finish (5-10 min)
**Where**: Process Timeline section
**Why**: Educates customers, builds trust

**Content ideas:**
- Speed-up footage (timelapse)
- Before/after transformations
- Restoration process
- Custom design creation

### Priority 3: Testimonials Video
**What**: Real customers talking about their experience
**Where**: Testimonials section
**Why**: Most powerful social proof

**Content ideas:**
- Customer in their home with your furniture
- Quick 30-second testimonials
- Installation day footage

### Priority 4: Educational Content
**What**: Wood care, tips, maintenance
**Where**: Blog/Resources section
**Why**: Positions you as expert, SEO benefits

**Content ideas:**
- How to care for oak furniture
- Cleaning tips
- Preventing damage
- Seasonal maintenance

## 🚀 How to Add Videos

### Option 1: YouTube Embed (Recommended)
**Best for**: Most video types

**Pros:**
- Free hosting
- Easy to upload
- Automatic optimization
- Analytics included

**How:**
1. Upload video to YouTube
2. Make it Public or Unlisted
3. Copy embed code
4. Tell me YouTube URL
5. I'll add it to site

### Option 2: Vimeo Embed
**Best for**: Professional/production videos

**Pros:**
- No ads
- Better quality
- More control

**Cons:**
- Free plan limited
- Less SEO benefit

### Option 3: Direct Upload
**Best for**: Small videos only

**Pros:**
- Full control
- No external site

**Cons:**
- Hosting costs
- Slower loading
- Storage issues

## 📍 Where to Add Videos

### Hero Section
**Effect**: First impression, dramatic impact

```tsx
// Background video (subtle, muted)
<video autoPlay muted loop>
  <source src="workshop-tour.mp4" type="video/mp4" />
</video>
```

### About Section
**Effect**: Workshop tour, behind-the-scenes

```tsx
// Featured video player
<iframe 
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  allowFullScreen
/>
```

### Process Timeline
**Effect**: Show each step visually

```tsx
// Step-by-step videos
<ProcessStep videoId="..." />
```

### Portfolio
**Effect**: Video of each project

```tsx
// Video alongside images
<PortfolioItem 
  images={[...]}
  video="project-timelapse.mp4"
/>
```

## 🎬 Video Best Practices

### Length
- **Hero**: 30-60 seconds (loop)
- **Process**: 2-5 minutes
- **Testimonial**: 30-90 seconds
- **Educational**: 3-10 minutes

### Quality
- **Resolution**: 1080p minimum
- **Format**: MP4 (H.264)
- **Compression**: Optimize for web
- **Audio**: Clear, professional

### Content
- **Hook**: Grab attention in first 5 seconds
- **Story**: Show journey, not just result
- **Authenticity**: Real, not overly produced
- **Call-to-action**: End with booking button

### SEO
- **Title**: Include keywords
- **Description**: Detailed, with keywords
- **Thumbnail**: Eye-catching, high-quality
- **Transcript**: Add captions/subtitles

## 🛠️ Technical Implementation

### YouTube Integration

**Simple embed:**
```tsx
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Your video title"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

**Lazy loading:**
```tsx
<iframe
  loading="lazy"
  src="https://www.youtube.com/embed/VIDEO_ID"
/>
```

### Video Component

I'll create a reusable video component:

```tsx
<VideoPlayer
  source="youtube" // or "vimeo" or "direct"
  videoId="YOUR_ID"
  autoplay={false}
  loop={false}
  muted={true}
/>
```

## 📊 Where to Get Videos

### Create Your Own
**Tools:**
- **Phone**: iPhone or Android (good enough!)
- **Stabilizer**: Gimbal ($50-200)
- **Editing**: iMovie (free) or DaVinci Resolve (free)
- **Microphone**: External mic ($30-100)

**Script template:**
1. Hook (5 sec): "This is how we create..."
2. Setup (15 sec): Show the problem/need
3. Process (2 min): Show your work
4. Result (15 sec): Beautiful final product
5. CTA (5 sec): "Book a consultation"

### Hire Professional
**Cost**: $500-2,000 for 2-3 videos
**Platforms**: Fiverr, Upwork, local videographers
**ROI**: High if done right

### Use Stock Video
**Sites**: Pexels, Pixabay (free)
**Best for**: Background, B-roll
**Not ideal**: Primary content (not personal)

## 🎯 Quick Start

### This Week: Hero Background Video
1. Record 30-60 second workshop overview
2. Upload to YouTube as Unlisted
3. Send me the URL
4. I'll add as subtle background video

### Next Week: Process Video
1. Record timelapse of one project
2. Edit to 2-3 minutes
3. Upload to YouTube
4. Add to Process Timeline section

### This Month: Testimonial
1. Ask happy customer to record
2. Quick 30-second clip
3. Upload to YouTube
4. Add to Testimonials section

## 📈 Results to Expect

**With no video:**
- Average time on site: 1 min
- Bounce rate: 60%
- Conversion rate: 1-2%

**With video:**
- Average time on site: 3-5 min ⬆️
- Bounce rate: 30-40% ⬇️
- Conversion rate: 5-10% ⬆️

## 🆘 Need Help?

**No video yet?**
- Start with YouTube embeds from your Instagram
- Use existing workshop photos in slideshow
- I can add video placeholders

**Want me to add videos?**
Just send me:
1. Video URLs (YouTube/Vimeo)
2. Where to place them
3. I'll integrate in 10 minutes

**Need video editing?**
I can recommend tools or help with basic editing

---

**Ready to add videos?** Send me your YouTube URLs! 🎬

