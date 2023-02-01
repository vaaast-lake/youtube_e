export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async searchByRelated(videoId) {
    return this.#searchByRelated(videoId);
  }

  async channelImageURL(id) {
    return this.apiClient
      .channels(id)
      .then(res => res.data.items[0].snippet.thumbnails.default.url);
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword
        }
      })
      .then(res => res.data.items)
      .then(items => items.map(item => ({...item, id: item.id.videoId})));
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
        }
      })
      .then(res => res.data.items);
  }

  async #searchByRelated(videoId) {
    return this.apiClient
      .related({
        params: {
          part: 'snippet',
          realtedToVideoId: videoId,
          type: 'video',
        }
      })
      .then(res => res.data.items)
      .then(items => items.map(item => ({...item, id: item.id.videoId})));
  }

}