<?php
namespace MiniProjet;

class Guard
{
    public function giveAccess(Post $post, User $user): User
    {
        if ($post->isPrivate()) {
            if (in_array('ANONYMOUS', $user->getRoles())) {
                throw new RuntimeException("Anonymous users cannot access private posts");
            }
            if (in_array('USER', $user->getRoles())) {
                $user->addRole('ADMIN');
            }
        } else {
            if (in_array('ANONYMOUS', $user->getRoles())) {
                $user->addRole('USER');
            }
        }

        return $user;
    }

    public function removeAccess(Post $post, User $user): User
    {
        if ($post->isPrivate()) {
            if (in_array('USER', $user->getRoles())) {
                $user->removeRole('USER');
                $user->addRole('ANONYMOUS');
            } elseif (in_array('ADMIN', $user->getRoles())) {
                $user->removeRole('ADMIN');
                $user->addRole('USER');
            }
        } else {
            if (in_array('USER', $user->getRoles())) {
                $user->removeRole('USER');
                $user->addRole('ANONYMOUS');
            } elseif (in_array('ADMIN', $user->getRoles())) {
                $user->removeRole('ADMIN');
                $user->addRole('USER');
            }
        }

        return $user;
    }
}