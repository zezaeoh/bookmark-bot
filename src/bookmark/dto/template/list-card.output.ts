import { Output, Button, Link } from './index';

export class ListItem {
  title: string;
  description?: string;
  imageUrl?: string;
  link?: Link
}

export class ListCard extends Output{
  listCard: {
    header: ListItem,
    items: ListItem[],
    buttons?: Button[]
  }
}