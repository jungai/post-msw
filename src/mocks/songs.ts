import { MockResolveFn } from "./types";

export interface Song {
  id: number;
  name: string;
  artist: string;
}

const songsData: Song[] = [
  {
    id: 1,
    name: "strawberry moon",
    artist: "iu",
  },
  {
    id: 2,
    name: "ต้องชอบแค่ไหน",
    artist: "PRETZELLE",
  },
  {
    id: 3,
    name: "TRICK OR TREAT",
    artist: "4EVE",
  },
];

export const songsHandler: MockResolveFn = (req, res, ctx) => {
  const name = req.url.searchParams.get("name");

  if (name) {
    return res(
      ctx.status(200),
      ctx.json<Song[]>(songsData.filter((song) => song.name === name))
    );
  }

  return res(ctx.status(200), ctx.json<Song[]>(songsData));
};
