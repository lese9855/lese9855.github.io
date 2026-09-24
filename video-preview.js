/* Local file previews have no HTTP page origin to identify a YouTube embed. */
(() => {
  'use strict';

  function prepareLocalVideoPreviews(root = document) {
    if (window.location.protocol !== 'file:') return;

    for (const figure of root.querySelectorAll('.video')) {
      const iframe = figure.querySelector('iframe');
      const watchLink = figure.querySelector('figcaption a');
      if (!iframe || !watchLink) continue;

      const posterLink = document.createElement('a');
      posterLink.className = 'video-poster-link';
      posterLink.href = watchLink.href;
      posterLink.setAttribute('aria-label', 'Watch on YouTube: ' + iframe.title);

      if (figure.dataset.poster) {
        const poster = document.createElement('img');
        poster.src = figure.dataset.poster;
        poster.alt = '';
        poster.loading = 'lazy';
        posterLink.append(poster);
      }

      const label = document.createElement('span');
      label.textContent = 'Watch on YouTube';
      posterLink.append(label);
      iframe.parentElement.replaceChildren(posterLink);

      const note = document.createElement('p');
      note.className = 'video-preview-note';
      note.textContent = 'To play this video on the page, open the site with Start-preview.py or visit its web address.';
      figure.insertBefore(note, figure.querySelector('figcaption'));
    }
  }

  window.prepareLocalVideoPreviews = prepareLocalVideoPreviews;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => prepareLocalVideoPreviews());
  } else {
    prepareLocalVideoPreviews();
  }
})();
