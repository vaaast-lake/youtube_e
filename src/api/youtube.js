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

  async channels(channelId) {
    return this.#channels(channelId);
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

  async #channels(channelId) {
    return this.apiClient
      .detail({
        params: {
          part: 'snippet%2CcontentDetails%2Cstatistics',
          id: channelId,
        }
      })
      .then(res => res.data.items)
      .then(item => (item[0]));
  }
}