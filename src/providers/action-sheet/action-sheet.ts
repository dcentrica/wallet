import { ComponentRef, Injectable } from '@angular/core';
import { ActionSheetParent } from '../../components/action-sheet/action-sheet-parent';
import { EmailComponent } from '../../components/email-component/email-component';
import { EncryptPasswordComponent } from '../../components/encrypt-password/encrypt-password';
import { FooterMenuComponent } from '../../components/footer-menu/footer-menu';
import { IncomingDataMenuComponent } from '../../components/incoming-data-menu/incoming-data-menu';
import { InfoSheetComponent } from '../../components/info-sheet/info-sheet';
import { MemoComponent } from '../../components/memo-component/memo-component';
import { MinerFeeWarningComponent } from '../../components/miner-fee-warning/miner-fee-warning';
import { NeedsBackupComponent } from '../../components/needs-backup/needs-backup';
import { OptionsSheetComponent } from '../../components/options-sheet/options-sheet';
import { PhoneSheet } from '../../components/phone-sheet/phone-sheet';
import { WalletReceiveComponent } from '../../components/wallet-receive/wallet-receive';
import { WalletSelectorComponent } from '../../components/wallet-selector/wallet-selector';
import { WalletTabOptionsComponent } from '../../components/wallet-tab-options/wallet-tab-options';
import { DomProvider } from '../../providers/dom/dom';

export type InfoSheetType =
  | 'activation-fee-included'
  | 'address-copied'
  | 'archive-all-gift-cards'
  | 'archive-gift-card'
  | 'appreciate-review'
  | 'backup-needed-with-activity'
  | 'backup-ready'
  | 'backup-later-warning'
  | 'backup-safeguard-warning'
  | 'copy-to-clipboard'
  | 'copied-gift-card-claim-code'
  | 'copied-invoice-url'
  | 'default-error'
  | 'erc20-eth-fee-info'
  | 'gift-card-archived'
  | 'gift-cards-unavailable'
  | 'hide-gift-card-discount-item'
  | 'insufficient-funds'
  | 'insufficient-funds-for-fee'
  | 'import-no-wallet-warning'
  | 'above-maximum-gift-card-amount'
  | 'below-minimum-gift-card-amount'
  | 'legacy-address-info'
  | 'linkEthWallet'
  | 'max-amount-allowed'
  | 'min-amount-allowed'
  | 'miner-fee-notice'
  | 'one-phone-country'
  | 'payment-request'
  | 'payment-method-changed'
  | 'print-required'
  | 'send-max-min-amount'
  | 'sensitive-info'
  | 'slippage-info'
  | 'in-app-notification'
  | 'request-feature'
  | 'report-issue'
  | 'new-key'
  | 'wrong-encrypt-password'
  | 'bch-legacy-warning-1'
  | 'bch-legacy-warning-2'
  | 'network-coin-warning'
  | 'speed-up-tx'
  | 'speed-up-notice'
  | 'unconfirmed-inputs'
  | 'rbf-tx'
  | 'total-amount'
  | 'subtotal-amount'
  | 'no-wallets-available'
  | 'recovery-phrase-length'
  | 'no-wallets-error'
  | 'wyre-error'
  | 'protect-money'
  | 'pincode-info'
  | 'key-verification-required'
  | 'encrypt-password-warning'
  | 'auth-required'
  | 'verification-required'
  | 'incorrect-recovery-prhase'
  | 'correct-recovery-prhase'
  | 'unsupported-alt-currency'
  | 'custom-fee-warning'
  | 'sync-wallets'
  | 'custom-tokens-warning'
  | 'testnet-warning-1'
  | 'multisig-instantiation'
  | 'exchange-crypto-disclaimer'
  | 'join-wallet-warning'
  | 'token-added';

export type OptionsSheetType =
  | 'wallet-options'
  | 'gift-card-options'
  | 'incoming-data'
  | 'address-book'
  | 'send-options';

export interface WalletSelectorParams {
  wallets: any[];
  title: string;
  selectedWalletId?: string;
  coinbaseData?: {
    user: any[];
    availableAccounts: any[];
  };
  fromWalletConnect?: boolean;
  token?: any;
  linkEthTokens?: boolean;
}

export interface WalletReceiveParams {
  wallet: any;
}

export interface WalletTabOptionsParams {
  walletsGroups: any;
}

export interface FooterMenuParams {
  clipboardData: string;
}

@Injectable()
export class ActionSheetProvider {
  constructor(private domProvider: DomProvider) {}

  public createOptionsSheet(
    type: OptionsSheetType,
    params?
  ): OptionsSheetComponent {
    return this.setupSheet<OptionsSheetComponent>(
      OptionsSheetComponent,
      type,
      params
    ).instance;
  }

  public createIncomingDataMenu(params?): IncomingDataMenuComponent {
    return this.setupSheet<IncomingDataMenuComponent>(
      IncomingDataMenuComponent,
      null,
      params
    ).instance;
  }

  public createInfoSheet(type: InfoSheetType, params?): InfoSheetComponent {
    return this.setupSheet<InfoSheetComponent>(InfoSheetComponent, type, params)
      .instance;
  }

  public createMemoComponent(memo): MemoComponent {
    return this.setupSheet<MemoComponent>(MemoComponent, null, { memo })
      .instance;
  }

  public createEmailComponent(): EmailComponent {
    return this.setupSheet<EmailComponent>(EmailComponent).instance;
  }

  public createPhoneSheet(params): PhoneSheet {
    return this.setupSheet<PhoneSheet>(PhoneSheet, null, params).instance;
  }

  public createWalletSelector(
    params: WalletSelectorParams
  ): WalletSelectorComponent {
    return this.setupSheet<WalletSelectorComponent>(
      WalletSelectorComponent,
      null,
      params
    ).instance;
  }

  public createWalletReceive(
    params: WalletReceiveParams
  ): WalletReceiveComponent {
    return this.setupSheet<WalletReceiveComponent>(
      WalletReceiveComponent,
      null,
      params
    ).instance;
  }

  public createNeedsBackup(): NeedsBackupComponent {
    return this.setupSheet<NeedsBackupComponent>(NeedsBackupComponent, null)
      .instance;
  }

  public createWalletTabOptions(
    params: WalletTabOptionsParams
  ): WalletTabOptionsComponent {
    return this.setupSheet<WalletTabOptionsComponent>(
      WalletTabOptionsComponent,
      null,
      params
    ).instance;
  }

  public createEncryptPasswordComponent(): EncryptPasswordComponent {
    return this.setupSheet<EncryptPasswordComponent>(EncryptPasswordComponent)
      .instance;
  }

  public createMinerFeeWarningComponent(): MinerFeeWarningComponent {
    return this.setupSheet<MinerFeeWarningComponent>(MinerFeeWarningComponent)
      .instance;
  }

  public createFooterMenu(params?: FooterMenuParams): FooterMenuComponent {
    return this.setupSheet<FooterMenuComponent>(
      FooterMenuComponent,
      null,
      params
    ).instance;
  }

  private setupSheet<T extends ActionSheetParent>(
    componentType: { new (...args): T },
    sheetType?: string,
    params?
  ): ComponentRef<T> {
    const sheet = this.domProvider.appendComponentToBody<T>(componentType);
    sheet.instance.componentRef = sheet;
    sheet.instance.sheetType = sheetType;
    sheet.instance.params = params;
    return sheet;
  }
}
