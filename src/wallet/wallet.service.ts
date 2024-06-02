import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallet } from './wallet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet) private WalletRepository: Repository<Wallet>,
  ) {}

  async createWallet(walletData: Omit<Wallet, 'id'>): Promise<Wallet> {
    const wallet = this.WalletRepository.create(walletData);
    return this.WalletRepository.save(wallet);
  }

  async generateAddress(): Promise<string> {
    const address =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    return address;
  }
}
