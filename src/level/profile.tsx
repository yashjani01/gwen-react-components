import React from "react"
import styled from "styled-components"
import { Rewards } from "../components/reward"
import { Theme } from "../theme"
import { LevelAvatarData, LevelData } from "../types/level"
import { LevelCircle } from "./level-circle"
import { LevelTranslation } from "./translations"

export interface ProfileProps {
	translations: LevelTranslation
	data?: LevelData
	avatar?: LevelAvatarData
	selectAvatar?: () => void
}

export class Profile extends React.PureComponent<ProfileProps> {
	render() {
		const { data } = { ...this.props }
		const { translations } = this.props
		return (
			<Wrapper>
				<LevelWrapper>
					<LevelCircle translations={translations} data={data} avatar={this.props.avatar} size={160} />
				</LevelWrapper>
				<hr />
				<SecondaryText>{translations.xpUntilNextLevel}</SecondaryText>
				<ExperienceLeft>{data ? data.levelXp - data.currentXp : ""}</ExperienceLeft>
				{data && data.rewards.length > 0 && <Rewards rewards={data.rewards} rewardsTranslation={translations.rewards} />}
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
const LevelWrapper = styled.div`
	margin-top: 5%;
`
const SecondaryText = styled.div`
	font-size: 18px;
	line-height: 24px;
	color: ${Theme.colors.text.secondary};
	font-weight: bold;
	padding: 0 20px;
	margin-top: -4px;
`
const ExperienceLeft = styled.div`
	font-size: 28px;
	line-height: 28px;
	margin-top: 8px;
	font-weight: bold;
`