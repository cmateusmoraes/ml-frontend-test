export function convertIntToMoney(value: number, currency: string): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: currency,
  }).format(value);
}

export function getProductImage(
  thumb_id: string | null,
  picture: string,
): string {
  return thumb_id ? `https://http2.mlstatic.com/D_${thumb_id}-F.webp` : picture;
}
