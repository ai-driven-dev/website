[Weekly AI Tips](../README.md) / [Modules](../modules.md) / src/features/votingSystem/api/vote

# Module: src/features/votingSystem/api/vote

## Table of contents

### Functions

- [vote](src_features_votingSystem_api_vote.md#vote)

## Functions

### vote

▸ **vote**(`tipData`, `fromUser`, `voteType`): `Promise`\<``true``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tipData` | ``null`` \| [`default`](../interfaces/src_features_tipManagement_types_TipEntity.default.md) |
| `fromUser` | ``null`` \| [`default`](../interfaces/src_features_userManagement_types_UserEntity.default.md) |
| `voteType` | ``"upvote"`` \| ``"downvote"`` |

#### Returns

`Promise`\<``true``\>

#### Defined in

[src/features/votingSystem/api/vote.ts:8](https://github.com/alexsoyes/weekly-ai-tips/blob/8e6b4ae946047053b809d45f37efccbb35947373/src/features/votingSystem/api/vote.ts#L8)