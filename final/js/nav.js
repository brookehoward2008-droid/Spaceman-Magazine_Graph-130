const navToggle = document.querySelector('.nav-toggle');
const siteNavigation = document.querySelector('#site-navigation');

if (navToggle && siteNavigation) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNavigation.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const expandableImages = document.querySelectorAll('.hero-image img, .image-strip img, .scan-card img, .photo-album img');

if (expandableImages.length) {
  const style = document.createElement('style');
  style.textContent = `
    .hero-image img,
    .image-strip img,
    .scan-card img,
    .photo-album img {
      cursor: zoom-in;
    }

    .image-viewer {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 18px;
      background: rgba(0, 0, 0, 0.92);
      backdrop-filter: blur(6px);
    }

    .image-viewer.is-open {
      display: flex;
    }

    .image-viewer img {
      display: block;
      width: 96vw;
      height: 90vh;
      max-width: 1800px;
      max-height: 92vh;
      object-fit: contain;
      border: 2px solid rgba(255, 255, 255, 0.88);
      box-shadow: 0 0 44px rgba(0, 0, 0, 0.85);
      background: #111820;
    }

    .image-viewer button {
      position: absolute;
      top: 18px;
      right: 18px;
      z-index: 10000;
      border: 1px solid rgba(255, 255, 255, 0.7);
      background: rgba(17, 24, 32, 0.94);
      color: #f4f0e8;
      padding: 10px 14px;
      font: inherit;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  const viewer = document.createElement('aside');
  viewer.className = 'image-viewer';
  viewer.setAttribute('aria-hidden', 'true');
  viewer.innerHTML = '<button type="button">Close</button><img alt="Expanded magazine image" />';
  document.body.appendChild(viewer);

  const viewerImage = viewer.querySelector('img');
  const closeButton = viewer.querySelector('button');

  const closeViewer = () => {
    viewer.classList.remove('is-open');
    viewer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  expandableImages.forEach((image) => {
    image.setAttribute('tabindex', '0');
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', 'Expand image for easier viewing');

    const openViewer = () => {
      viewerImage.src = image.currentSrc || image.src;
      viewerImage.alt = image.alt || 'Expanded magazine image';
      viewer.classList.add('is-open');
      viewer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      closeButton.focus();
    };

    image.addEventListener('click', openViewer);
    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openViewer();
      }
    });
  });

  closeButton.addEventListener('click', closeViewer);
  viewer.addEventListener('click', (event) => {
    if (event.target === viewer) {
      closeViewer();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && viewer.classList.contains('is-open')) {
      closeViewer();
    }
  });
}