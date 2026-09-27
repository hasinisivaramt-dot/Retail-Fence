# Smart Geo-Offer — Premium Warm UI

This version follows the supplied warm peach / cream / brown reference design and keeps the existing React/Vite application structure.

## Included
- Warm premium landing page redesign.
- AI-generated visual reference included at `public/assets/smart-geo-offer-reference.png`.
- 7-second looping MP4 hero demo at `public/assets/geo-offer-gps-demo.mp4`.
- Animated GPS/store/offer network inside the hero video.
- Real OpenStreetMap embed in the live geo-fence section.
- Browser GPS button in the map section. If permission is granted, the map recenters on the browser location.
- Existing application routes and dashboard files retained.

## Run
```bash
npm install
npm run dev
```

## Map source
The live map uses OpenStreetMap's public embed endpoint. Internet access is required for the map tiles.

## Hero video
The MP4 is a locally bundled cinematic GPS demo based on the supplied AI-generated visual direction. It is a real playable video asset (H.264 MP4, 7 seconds, 24 fps) and does not depend on a video CDN.
