import { calculateScore } from "./helper";

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

    public async getPlaylistTracks(playlist_id: string) {
        const res = await fetch(
            `https://api.spotify.com/v1/playlists/${playlist_id}`,
            {
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                },
            }
        ).then((res) => res.json());

        return res;
    }

    public async getFollowedArtists(props = { limit: 1 }) {
        const res = await fetch(
            `https://api.spotify.com/v1/me/following?type=artist&limit=${props.limit}`,
            {
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                },
            }
        ).then((res) => res.json());

        return res;
    }

    public async getTrack(track_id: string) {
        const res = await fetch(
            `https://api.spotify.com/v1/tracks/${track_id}`,
            {
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                },
            }
        ).then((res) => res.json());
        return res;
    }
    public async getAudioFeaturesForTrack(track_id: string) {
        const res = await fetch(
            `https://api.spotify.com/v1/audio-features/${track_id}`,
            {
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                },
            }
        ).then((res) => res.json());

        return calculateScore(res);
    }

    public async getArtist(artist_id: string) {
        const res = await fetch(
            `https://api.spotify.com/v1/artists/${artist_id}`,
            {
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                },
            }
        ).then((res) => res.json());
        return res;
    }
    public async getArtistTopTracks(artist_id: string) {
        const res = await fetch(
            `https://api.spotify.com/v1/artists/${artist_id}/top-tracks?market=US`,
            {
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                },
            }
        ).then((res) => res.json());
        return res;
    }
    public async getArtistRelatedArtists(artist_id: string) {
        const res = await fetch(
            `https://api.spotify.com/v1/artists/${artist_id}/related-artists`,
            {
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                },
            }
        ).then((res) => res.json());
        return res;
    }

    public async getArtistAlbums(artist_id: string) {
        const res = await fetch(
            `https://api.spotify.com/v1/artists/${artist_id}/albums?include_groups=album%2Csingle%2Cappears_on`,
            {
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                },
            }
        ).then((res) => res.json());
        return res;
    }
}
