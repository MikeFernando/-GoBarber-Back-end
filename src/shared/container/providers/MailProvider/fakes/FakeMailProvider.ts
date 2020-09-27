import IMailProvider from '../models/IMailProvider';
import ISendMailtDTO from '../dtos/ISendMailDTO';

export default class FakeMailProvider implements IMailProvider {
  private messages: ISendMailtDTO[] = [];

  public async sendMail(message: ISendMailtDTO): Promise<void> {
    this.messages.push(message);
  }
}
