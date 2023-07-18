export class SpotifyApi {
  constructor(token: string) {
    this.accessToken = token;
  }

  private accessToken: string = "";

  public setAccessToken(token: string) {
    this.accessToken = token;
  }

  public async getMe() {
    const res = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    }).then((res) => res.json());

    return res;
  }

  public async getMyTopTracks(
    props = {
      limit: 20,
      time_range: "medium_term",
    }
  ) {
    const res = await fetch(
      `https://api.spotify.com/v1/me/top/tracks?limit=${props.limit}&time_range=${props.time_range}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    ).then((res) => res.json());

    return res;
  }

  public async getMyTopArtists(
    props = { limit: 20, time_range: "medium_term" }
  ) {
    const res = await fetch(
      `https://api.spotify.com/v1/me/top/artists?limit=${props.limit}&time_range=${props.time_range}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    ).then((res) => res.json());

    return res;
  }

  public async getMyRecentlyPlayedTracks(props = { limit: 20 }) {
    const res = await fetch(
      `https://api.spotify.com/v1/me/player/recently-played?limit=${props.limit}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    ).then((res) => res.json());

    return res;
  }

  public async getUserPlaylists(props = { limit: 20 }) {
    const res = await fetch(
      `https://api.spotify.com/v1/me/playlists?limit=${props.limit}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    ).then((res) => res.json());

    return res;
  }
}
