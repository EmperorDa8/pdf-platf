import { toPng } from 'jdenticon';
import { promises as fs } from 'fs';

export async function generateAbstractThumbnail(id: string): Promise<Buffer> {
  const png = toPng(id, 200);
  return png;
}
