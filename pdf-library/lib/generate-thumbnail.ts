import { toPng } from 'jdenticon';


export async function generateAbstractThumbnail(id: string): Promise<Buffer> {
  const png = toPng(id, 200);
  return png;
}
