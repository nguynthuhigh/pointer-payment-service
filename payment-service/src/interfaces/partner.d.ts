export interface IPartner {
  _id: string;
  name: string;
  description: string;
  image: string;
  phone: string;
  address: string;
  email: string;
  privateKey: string;
  publicKey: string;
  inactive: boolean;
  webhook: string;
}
