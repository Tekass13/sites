<?php
declare(strict_types=1);

namespace MiniProjet;

class Guard
{
    public function giveAccess(Post $post, User $user): User
    {
        if ($post->isPrivate()) {
            $this->ensureAnonymousCannotAccessPrivatePost($user);

            if ($user->hasRole('USER')) {
                $user->addRole('ADMIN');
            }
        } else {
            if ($user->hasRole('ANONYMOUS')) {
                $user->addRole('USER');
            }
        }

        return $user;
    }

    public function removeAccess(Post $post, User $user): User
    {
        if ($post->isPrivate()) {
            $this->handlePrivatePostAccessRemoval($user);
        } else {
            $this->handlePublicPostAccessRemoval($user);
        }

        return $user;
    }

    private function ensureAnonymousCannotAccessPrivatePost(User $user): void
    {
        if ($user->hasRole('ANONYMOUS')) {
            throw new \RuntimeException("Anonymous users cannot access private posts");
        }
    }

    private function handlePrivatePostAccessRemoval(User $user): void
    {
        if ($user->hasRole('ADMIN')) {
            $user->removeRole('ADMIN');
            $user->addRole('USER');
        } elseif ($user->hasRole('USER')) {
            $user->removeRole('USER');
            $user->addRole('ANONYMOUS');
        }
    }

    private function handlePublicPostAccessRemoval(User $user): void
    {
        if ($user->hasRole('USER')) {
            $user->removeRole('USER');
            $user->addRole('ANONYMOUS');
        } elseif ($user->hasRole('ADMIN')) {
            $user->removeRole('ADMIN');
            $user->addRole('USER');
        }
    }
}
