export function convertIntToMoney(
  amount: number,
  decimals: number,
  currency: string,
): string {
  const totalPrice = amount + decimals / 100;

  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: currency,
  }).format(totalPrice);
}

export function getProductImage(
  thumb_id: string | null,
  picture: string,
): string {
  return thumb_id ? `https://http2.mlstatic.com/D_${thumb_id}-F.webp` : picture;
}
