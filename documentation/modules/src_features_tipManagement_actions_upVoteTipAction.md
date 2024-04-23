[Weekly AI Tips](../README.md) / [Modules](../modules.md) / src/features/tipManagement/actions/upVoteTipAction

# Module: src/features/tipManagement/actions/upVoteTipAction

## Table of contents

### Functions

- [upVoteTipAction](src_features_tipManagement_actions_upVoteTipAction.md#upvotetipaction)

## Functions

### upVoteTipAction

▸ **upVoteTipAction**(`_`, `formData`): `Promise`\<`boolean` \| `string` \| ``null``\>

Upvote a tip from a user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | ``null`` \| `string` \| `boolean` |
| `formData` | `FormData` |

#### Returns

`Promise`\<`boolean` \| `string` \| ``null``\>

A boolean indicating success.

**`Throws`**

If the user has already upvoted the tip.

#### Defined in

[src/features/tipManagement/actions/upVoteTipAction.ts:16](https://github.com/alexsoyes/weekly-ai-tips/blob/82d80f9c03fb9b1eb480331758fae01e00b39731/src/features/tipManagement/actions/upVoteTipAction.ts#L16)
