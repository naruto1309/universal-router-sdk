import { ConsiderationItem, SeaportData } from '../../src/entities/protocols/seaport'
import { BigNumber } from 'ethers'
import { TEST_RECIPIENT_ADDRESS } from '../utils/addresses'

export const seaportDataETH: SeaportData = {
  items: [
    {
      parameters: {
        offerer: '0x0f1fcc9da5db6753c90fbeb46024c056516fbc17',
        offer: [
          {
            itemType: 2,
            token: '0x5180db8F5c931aaE63c74266b211F580155ecac8',
            identifierOrCriteria: '8271',
            startAmount: '1',
            endAmount: '1',
          },
        ],
        consideration: [
          {
            itemType: 0,
            token: '0x0000000000000000000000000000000000000000',
            identifierOrCriteria: '0',
            startAmount: '30525000000000000000',
            endAmount: '30525000000000000000',
            recipient: '0x0f1fcc9DA5DB6753c90fBeB46024c056516FBC17',
          },
          {
            itemType: 0,
            token: '0x0000000000000000000000000000000000000000',
            identifierOrCriteria: '0',
            startAmount: '825000000000000000',
            endAmount: '825000000000000000',
            recipient: '0x8De9C5A032463C561423387a9648c5C7BCC5BC90',
          },
          {
            itemType: 0,
            token: '0x0000000000000000000000000000000000000000',
            identifierOrCriteria: '0',
            startAmount: '1650000000000000000',
            endAmount: '1650000000000000000',
            recipient: '0xac9d54ca08740A608B6C474e5CA07d51cA8117Fa',
          },
        ],
        startTime: '1657325657',
        endTime: '1672881257',
        orderType: 2,
        zone: '0x004C00500000aD104D7DBd00e3ae0A5C00560C00',
        zoneHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
        salt: '196452098662466',
        conduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
        totalOriginalConsiderationItems: 3,
      },
      signature:
        '0x58073c305ffa6daf8b6279050d9837d88040350a004efe3028fd6cda8aef41cd0819bb209b6ef3b3d6df717180677a3916c15ea669f8251471d3d39ee6abdac31b',
    },
    {
      parameters: {
        offerer: '0x4fdcd0496f4c2d3629c0741626de74d24a683e50',
        offer: [
          {
            itemType: 2,
            token: '0x5180db8F5c931aaE63c74266b211F580155ecac8',
            identifierOrCriteria: '6366',
            startAmount: '1',
            endAmount: '1',
          },
        ],
        consideration: [
          {
            itemType: 0,
            token: '0x0000000000000000000000000000000000000000',
            identifierOrCriteria: '0',
            startAmount: '18500000000000000000',
            endAmount: '18500000000000000000',
            recipient: '0x4fdcD0496F4c2D3629C0741626DE74d24A683E50',
          },
          {
            itemType: 0,
            token: '0x0000000000000000000000000000000000000000',
            identifierOrCriteria: '0',
            startAmount: '500000000000000000',
            endAmount: '500000000000000000',
            recipient: '0x8De9C5A032463C561423387a9648c5C7BCC5BC90',
          },
          {
            itemType: 0,
            token: '0x0000000000000000000000000000000000000000',
            identifierOrCriteria: '0',
            startAmount: '1000000000000000000',
            endAmount: '1000000000000000000',
            recipient: '0xac9d54ca08740A608B6C474e5CA07d51cA8117Fa',
          },
        ],
        startTime: '1660708434',
        endTime: '1676264034',
        orderType: 2,
        zone: '0x004C00500000aD104D7DBd00e3ae0A5C00560C00',
        zoneHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
        salt: '1844479567226754',
        conduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
        totalOriginalConsiderationItems: 3,
      },
      signature:
        '0x81237739418cadbfd0875476c1d343550166e7099f0430ad581e98245e03db303480cbfda1e2c9aa6f3663d7f5ab86800b72ddeaaf81998179a651eef627e5f81b',
    },
  ],
  recipient: TEST_RECIPIENT_ADDRESS,
  protocolAddress: '0x00000000006c3852cbEf3e08E8dF289169EdE581',
}

export const seaportDataERC20: SeaportData = {
  items: [
    {
      parameters: {
        offerer: '0x551a6344576837333f6c2c27936d7bdda1b27283',
        offer: [
          {
            itemType: 2,
            token: '0x5180db8F5c931aaE63c74266b211F580155ecac8',
            identifierOrCriteria: '9282',
            startAmount: '1',
            endAmount: '1',
          },
        ],
        consideration: [
          {
            itemType: 1,
            token: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            identifierOrCriteria: '0',
            startAmount: '138750000000000000',
            endAmount: '138750000000000000',
            recipient: '0x551a6344576837333f6C2c27936D7BDDa1B27283',
          },
          {
            itemType: 1,
            token: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            identifierOrCriteria: '0',
            startAmount: '3750000000000000',
            endAmount: '3750000000000000',
            recipient: '0x0000a26b00c1F0DF003000390027140000fAa719',
          },
          {
            itemType: 1,
            token: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            identifierOrCriteria: '0',
            startAmount: '7500000000000000',
            endAmount: '7500000000000000',
            recipient: '0xac9d54ca08740A608B6C474e5CA07d51cA8117Fa',
          },
        ],
        startTime: '1674469519',
        endTime: '1677147919',
        orderType: 2,
        zone: '0x004C00500000aD104D7DBd00e3ae0A5C00560C00',
        zoneHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
        salt: '0x360c6ebe00000000000000000000000000000000000000006e312a018aa5d380',
        conduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
        totalOriginalConsiderationItems: 3,
      },
      signature:
        '0x595bd8731a7f40efcf819b872f4388ee836d884bbfc0b6a00131335c8923025245a78fabf360586ae157f34201bb5950a4858200bf69487178629dff43ab51c21b',
    },
  ],
  recipient: TEST_RECIPIENT_ADDRESS,
  protocolAddress: '0x00000000006c3852cbEf3e08E8dF289169EdE581',
}

export function calculateSeaportValue(considerations: ConsiderationItem[], token: string): BigNumber {
  return considerations.reduce(
    (amt: BigNumber, consideration: ConsiderationItem) =>
      consideration.token == token ? amt.add(consideration.startAmount) : amt,
    BigNumber.from(0)
  )
}
